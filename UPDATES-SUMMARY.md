# Updates Summary - Publications Website

## ✅ FIXED: JavaScript Display Issue

**Problem:** Raw JavaScript code was showing on the page
**Solution:**
- Created `plain-summaries-include.html` with proper `<script>` tags
- Updated `_quarto.yml` to use `include-after-body` instead of direct JS file
- Removed inline script tag from publications.qmd

**Status:** ✅ Fixed - rebuild site to see changes

---

## ✅ ADDED: Missing OSF Link

**Paper:** Humor-styles and personality (2020)
**Added:** [{{< fa database >}}](https://osf.io/6mhe4/)
**Location:** publications.qmd line 173

---

## ❓ QUESTION: Anxiety Paper

**File found:** `Plessen et al. - The efficacy of digital health interventions for anxiety...pdf`
**OSF Link:** https://osf.io/dm9x3/
**Status:** Not currently in publications.qmd
**Modification date:** August 27, 2025 (very recent!)

**Questions for you:**
1. Is this paper published or in preparation?
2. Should it be added to First Author Publications section?
3. If yes, what's the journal/status/DOI?

---

## 📋 Complete Status:

### First-Author Papers - All Links:

1. **DIF PROMIS 2025** ✅
   - PDF ✅
   - GitHub ✅
   - OSF ✅
   - Plain Summary ✅

2. **Digital Interventions 2024** ✅
   - PDF ✅
   - GitHub ✅
   - Plain Summary ✅

3. **Psychotherapy 2023** ✅
   - PDF ✅
   - GitHub ✅
   - OSF ✅
   - Plain Summary ✅

4. **PROMIS Reference 2023** ✅
   - PDF ✅
   - GitHub ✅ (2 repos)
   - Plain Summary ✅

5. **Protocol 2022** ✅
   - PDF ✅
   - OSF ✅
   - Plain Summary ✅

6. **Humor 2020** ✅
   - PDF ✅
   - OSF ✅ **← NEWLY ADDED!**
   - Plain Summary ✅

7. **Austrian Psychotherapy 2016** ✅
   - PDF ✅
   - Plain Summary ✅

8. **Anxiety Paper** ❓
   - PDF exists
   - OSF found: dm9x3
   - Not in publications list

---

## ✅ FIXED: PDF Icon Display Issue

**Problem:** PDF links with `{{< ai file-pdf >}}` weren't rendering on the site
**Solution:**
- Replaced all 7 instances of `{{< ai file-pdf >}}` with emoji `📄 PDF`
- Icons now display correctly for all first-author papers

**Status:** ✅ Fixed

---

## ✅ ADDED: Co-Author Paper Links

**Papers updated with data/code links:**

1. **Harrer 2025 (Psychological Bulletin)**
   - Added: OSF (ha745), GitHub (supersizing-meta-analysis), OSF (37nux)

2. **Harrison 2023 IRT TOPKAT paper**
   - Added: GitHub (IRT-modelling-for-the-OHS-and-OKS)

**Status:** ✅ Complete

---

## 🚀 Next Steps:

1. **Rebuild the site:**
   ```bash
   quarto render
   ```

2. **Test all features:**
   - Plain summary buttons
   - PDF links (now with emoji icons)
   - Co-author data/code links

3. **Anxiety paper:** User confirmed NOT to add this paper

---

## 🎨 Design Status:

- ✅ Playful colors (coral, orange, yellow gradients)
- ✅ Icon system with hover effects
- ✅ PhD thesis feature box
- ✅ Plain language summaries (bilingual)
- ✅ Smooth animations
- ✅ Mobile responsive

**Everything is ready!** Just need to rebuild and check the anxiety paper status.

