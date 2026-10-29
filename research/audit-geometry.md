# Procedural geometry audit — v11

Audit date: 2026-10-29. Inspected `index.html`, `research/v11-lafayette-preview.png`, and `references/drawings/2011-page-11-lafayette.png`. Findings distinguish code defects from source-based architectural corrections. No model edits made.

## Findings and proposed corrections

1. **High confidence: duplicated junction wall and ornament.** `lowOutline` edge 3 and `highOutline` edge 0 describe the same segment in opposite directions. `buildVolume` generates both walls, windows, cornices, parapets and belts there; the extra `cube` at x=-.95 adds a third return surface. Exclude the shared edge from exterior low-volume walls and perimeter decoration. Build one solid tall-volume return wall beginning at the low roof, up to the high roof. Keep any genuinely needed interior separation in the hypothetical frame only. Verify an oblique view over the low roof: no openings below the lower roof, coplanar flicker, or ornament buried in the taller block.

2. **High confidence: entrance aperture overlaps the opening above.** Entrance opening spans y=.18–2.70, while the next opening begins y=2.66. Their centers coincide and their paths overlap around the entrance arch crown. Overlapping Shape holes can triangulate unpredictably. The portal plaque/canopy also sits over the next opening. Define the entrance bay explicitly and reserve its vertical envelope before generating upper windows, rather than widening/tallening a generic ground window alone. Verify polygon holes are disjoint and the portal has no brick sliver across its arch.

3. **High confidence: floor configuration is internally misleading.** The low volume requests seven floors but clips its last row at roof height (9.72+1.02 exceeds 10.6-.1), so it displays six window rows. Tall volume displays nine rows. The existing Lafayette reference has six levels in the lower wing and eight in the taller wing, counted from visible sash/storey bands. Use explicit level elevations and grouping per façade instead of `floors` combined with hidden clipping. Uppermost low row should not disappear as an accidental side effect of roof height. Verify with level markers in an orthographic elevation and the source beside it.

4. **High confidence: arch type is repeated incorrectly.** `archPath` is used for every opening on every row. The source has rectangular intermediate sash below arches spanning the heads of multi-storey groups; it does not have separate semicircular heads at every storey. Introduce a rectangular path and select arch heads only at source-backed rows. Preserve three narrow windows per upper Lafayette bay. This correction matters more visually than adding further cornice details.

5. **Medium confidence: hole and glazing acceptance rules can diverge.** Wall holes require vertical and horizontal bounds; sash placement checks only vertical bounds. Existing counts generally fit, but future count/profile edits can put sash on solid brick. Compute one accepted openings list and use it for both cutting and glazing; explicitly mark the entrance opening as a portal. Verify every visible pane belongs to an accepted opening.

6. **Roof reflection is not an established defect.** `roofPlate` starts in XY, rotates -π/2 about X, then reflects Z. The resulting coordinates are `(planX, y, planY)`, matching the outlines. Removing the reflection would mirror the roof and cause real roof/wall misalignment. Material is DoubleSide, so the reversed normal does not explain missing visible plates. Prefer direct X/Z vertices if simplifying this code. Verify top-view roof vertices match the wall outline and inspect both wings from above before asserting a missing roof defect. The saved Lafayette view cannot establish roof coverage.

7. **Entrance alignment is correct within the current schema.** The portal uses 5.5/6 on tall edge 5; `entranceBay:5` cuts at that same bay center. Its outward sign also matches `buildVolume`. Remaining problems are source proportions, vertical overlap, and the façade orientation being audited separately—not an arbitrary need to move the portal to another bay.

## Verification that would meaningfully establish the corrections

- Save comparable exterior views: Lafayette orthographic, Mulberry orthographic, Houston, Jersey, plus a steep top oblique showing both roof polygons and the step junction.
- Check accepted aperture counts by edge/level, shape bounds, no intersections between hole polygons, and one glazing assembly per accepted non-portal hole.
- Compare grouped opening levels against the existing-elevation drawings, not proposed rooftop overlays.
- Label dimensions as approximate until a scaled plan/elevation is traced; do not convert these geometric fixes into claims of surveyed accuracy.
