# How to Add PDFs to Your Website

## Step 1: Add Your PDF Files

Copy your PDFs into this `/pdfs/` folder. Use descriptive names:

```bash
# Good examples:
plessen-phd-thesis.pdf
plessen-2024-digital-interventions-depression.pdf
plessen-2023-psychotherapy-multiverse.pdf
plessen-2023-promis-reference-values.pdf
```

## Step 2: Update publications.qmd

For each publication, add the PDF icon link on the line below the citation:

```markdown
Author et al. (2024). Title. *Journal*. [doi:link](doi-url)
[{{< ai file-pdf >}}](pdfs/filename.pdf) [{{< fa brands github >}}](github-url)
```

### Full Example:

```markdown
Plessen, C. Y., et al. (2024). Digital mental health interventions.
*Journal of Affective Disorders, 369*, 1031-1044.
[doi:10.1016/j.jad.2024.10.018](https://doi.org/10.1016/j.jad.2024.10.018)
[{{< ai file-pdf >}}](pdfs/plessen-2024-digital-interventions.pdf)
[{{< fa brands github >}}](https://github.com/cyplessen/multiverse-meta-analysis-depression)
```

## Step 3: Commit and Push

```bash
git add pdfs/your-new-file.pdf
git add publications.qmd
git commit -m "Add PDF for [paper title]"
git push
```

## Step 4: Rebuild Site

```bash
quarto render
```

## Important Notes

### Copyright & Publisher Policies
- ✅ **Always allowed**: Author's accepted manuscripts (post-prints) after embargo
- ✅ **Usually allowed**: Preprints, PhD thesis, technical reports
- ⚠️ **Check policy**: Final published PDFs (some publishers don't allow)
- 🔍 **Check SHERPA/RoMEO**: https://v2.sherpa.ac.uk/romeo/ for publisher policies

### File Size
- Keep PDFs under 10MB when possible
- Compress large PDFs: https://www.ilovepdf.com/compress_pdf
- Very large files (>20MB): Consider using GitHub Releases instead

### PhD Thesis
Your thesis section is already set up! Just:
1. Copy your thesis PDF to: `pdfs/plessen-phd-thesis.pdf`
2. Update the title/year in `publications.qmd` if needed (line 9-10)

The thesis will appear in a special highlighted box at the top of your publications page!

## Current Status

- ✅ `/pdfs/` folder created
- ✅ PhD thesis section added to publications page
- ✅ Icon styling configured (coral for PDF, blue for GitHub, orange for data)
- ⏳ Waiting for you to add PDF files

Enjoy! 🎉
