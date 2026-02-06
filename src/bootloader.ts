export const getBootloaderScript = (id: string = 'fwkui', key: string = 'xcss_cache_v1') => {
    return `
(function(){
  try {
    if(typeof window === 'undefined') return;
    var d = localStorage.getItem('${key}');
    if(!d) return;
    var j = JSON.parse(d);
    if(!j || !j.cssText) return;
    var s = document.getElementById('${id}');
    if(!s) {
      s = document.createElement('style');
      s.id = '${id}';
      document.head.appendChild(s);
    }
    var css = '';
    // Ensure root (with layer defs) comes first
    if(j.cssText.root) css += j.cssText.root + '\\n';
    
    // Append other media queries in order if possible, or just all
    // We iterate cssText keys. Root is already added.
    for(var k in j.cssText) {
       if(k !== 'root') {
          var t = j.cssText[k];
          // Check if it needs media wrapper (simple check, real logic is in lib)
          // But here in bootloader we assume cssText values are FULL CSS BLOCKS (including @media wrapping if stored that way)
          // OR: Library stores raw CSS and reconstruction logic is needed?
          // WAIT: Review plan. Plan says: cssText: Record<string, string>.
          // Library "getCssString" joins them.
          // Bootloader needs to reconstruct too?
          // Option A: Library stores "Ready-to-use" CSS string in a special key?
          // Option B: Bootloader reconstructs.
          
          // Let's go with Option B (Reconstruct) but simplest way:
          // The cache logic in core.ts should store "Full Valid CSS" for each key?
          // core.ts currently stores RAW css in cssStyleSheetsText.
          // And 'getCssString' wraps them.
          // SO: Cache MUST store WRAPPED CSS for bootloader to be simple.
          // OR: Bootloader knows media queries. (Too complex).
          
          // REVISION: We will implement 'saveCache' in core.ts to save *Wrapped* CSS or *Raw* CSS?
          // If we save Raw, bootloader needs to know MediaQuery definitions.
          // That is duplicated logic.
          
          // BETTER PLAN for Bootloader:
          // We will update core.ts to save a pre-built "allCss" string or similar?
          // No, that duplicates storage.
          
          // Let's stick to: cssText keys match keysCssStyleSheetsDom.
          // But bootloader doesn't know the media query strings (e.g. 'screen and (min-width: 576px)').
          // Those are in config.
          
          // CRITICAL FIX: The cache data MUST include the media query string mapping if we want bootloader to work standalone.
          // OR: We implicitly store "Wrapped CSS" in the cache.
          // Let's decide: In core.ts, BEFORE saving, we typically have raw text.
          // But for 'xs', it needs wrapping.
           
          // Let's modify core.ts to save "ready to inject" CSS chunks.
          // No, core.ts uses separate style sheets for media.
          // Bootloader usually injects ONE style tag.
          
          // ADJUSTMENT: Bootloader will just inject 'root' CSS. 
          // Media query CSS injection without config is impossible.
          
          // WAIT: If we want FULL Experience, Cache must contain Media Query Definitions or Pre-wrapped text.
          // Let's make core.ts save Pre-wrapped Text in 'cssText'.
          // i.e. cache.cssText['xs'] = "@media ... { ... }"
          
          css += t + '\\n';
       }
    }
    s.textContent = css;
  } catch(e) {}
})();
    `.trim().replace(/\s+/g, ' '); // Simple minify
}
