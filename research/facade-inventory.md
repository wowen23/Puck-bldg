# Facade inventory - 29 October 2026

Source: [2011 LPC rooftop presentation](https://media.villagepreservation.org/wp-content/uploads/2021/06/16153627/LPC-Proposal-9_20_11.pdf). Page numbers below are one-based PDF pages. Existing elevations describe the 2011 condition, not necessarily today's building. Proposed rooftop additions are excluded from this study.

| Facade | Evidence seen | Current model / next correction |
| --- | --- | --- |
| Lafayette, p. 11 | Four major ground arches in lower wing; six in taller wing, including entrance in the bay next to the junction. Upper windows occur in triples. Entrance has projecting canopy and columns. | v11 centers entrance on that bay, provides a dedicated aperture, adds a canopy, and uses upper triples. Pier widths, vertical grouping, arch profiles and portal dimensions remain approximate. |
| Mulberry, p. 7 | Six major ground arches in each wing; upper triple groups; broad paired arcade above ground. Lower wing has a small corner figure. | Model currently assigns four lower-wing and six taller-wing bays. Correct lower-wing count and upper groups after resolving corner allocations. |
| Houston, p. 9 left | Three major ground arches, paired openings above and upper triples; lower historic frontage with taller masses behind. | Ground count broadly agrees. Upper grouping and sculpture position need correction. Use existing left image; right image is proposed. |
| Jersey, p. 10 left | Distinct utilitarian elevation with pale wall fields, brick surrounds, irregular openings and infilled arches. | Current four-bay generic arcade is unsuitable. Requires a separate facade profile rather than repeating Lafayette. Right image includes proposed ground-window reopening and entrance. |

## v11 implementation and verification

- Kept v10 source unchanged in `versions/v10.html`; original index blob was `02d2a21136039485059544fe69f42140c7cfe7ea`.
- Lafayette profiles apply only to low outline edge 4 and high outline edge 5. Upper pairs become triples; other facades retain their prior geometry.
- Entrance moves from t=0.91 to t=5.5/6, exactly the center of the junction-side bay. Its aperture is widened and raised, and the generic sash in that opening is omitted. Doors sit behind the exterior wall face; pilasters and canopy project beyond it.
- Portal normal uses the same signed polygon area rule as the wall builder. Initial suspicion that v10 faced inward was disproved in preview; v10's outward direction was correct.
- Added a Lafayette camera preset for repeatable comparison. This is a perspective view, not a measured orthographic elevation.
- Local Chrome visual checks passed: exterior renders, entrance doors and canopy are visible, upper triples are visible, frame/exterior toggles work, reset works, source panel opens. No captured browser console errors.

## Remaining uncertainties

- Footprint is still an eighth-floor-plan approximation. Do not claim survey accuracy or revise frontage dimensions from these unscaled illustrations.
- The current coordinate/street mapping appears reversed in the Lafayette camera view relative to page 11: taller wing appears on the left. Resolve plan orientation against page 4 before changing massing or labeling compass directions.
- Roof plates appear absent from above in preview; inspect their rotation/reflection transform in a separate geometry fix.
- Story heights, masonry widths and portal proportions still differ substantially from the elevation. Lower arcade and vertically linked window groups need their own geometry.
- Existing figure placeholders have not been relocated or refined; the entrance sculpture remains a future correction.
- Modern photographs are cataloged in `references/README.md` but were not used for dimensional verification in this pass. Verify present-day details separately before labeling this a present-day reconstruction.
