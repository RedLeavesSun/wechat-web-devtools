export class CSSFontFace{constructor(t){this._fontFamily=t.fontFamily,this._fontVariationAxes=t.fontVariationAxes||[],this._fontVariationAxesByTag=new Map;for(const t of this._fontVariationAxes)this._fontVariationAxesByTag.set(t.tag,t)}getFontFamily(){return this._fontFamily}getVariationAxisByTag(t){return this._fontVariationAxesByTag.get(t)}}