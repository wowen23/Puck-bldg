# Audit disposition - v12

Three independent audits are saved as `audit-orientation.md`, `audit-facades.md` and `audit-geometry.md`. Findings describe v11; this file records their resolution.

## Corrected

- Reflected both exterior and frame into consistent world orientation. Lafayette now shows the lower wing at left, matching page 11; Mulberry shows the taller wing at left, matching page 7.
- Corrected Mulberry bay allocation to six lower / five taller; retained Lafayette four / six and Houston three.
- Replaced the implicit clipped row loop with six / eight visible levels. This is a count of drawn window levels, not a claim that historical seven/nine-story descriptions are wrong.
- Added paired lower and triple upper groups on the ornate fronts, rectangular intermediate sash, and arch heads only at register tops. Widths are approximate proportions derived from bay width.
- Reserved the entrance vertical envelope, eliminating its overlapping holes. Cutouts and sash share one accepted list.
- Removed duplicate shared walls and buried seam ornament; one exposed solid step-return remains, with a cap.
- Fixed roof shading by replacing rotation plus negative geometry scaling with an equivalent single rotation. Position mapping was correct in v11; inconsistent winding/normals made the plates shade almost black. Both plates now visibly cover their outlines.
- Relocated symbolic figures to entrance and Houston/Mulberry corner; removed Jersey roof figure and duplicate gold markers. Forms are still placeholders.
- Added a separate pale-infill, single-window Jersey profile. Exact blank/open window inventory is provisional, explicitly labeled schematic.
- Taller parapet piers follow major ornate facade bay boundaries. Lower parapet no longer has repeated raised piers.
- Added four street views and roof view. These are perspective presets, not measured orthographic projections.
- Replaced retail frontage labels in source panel with explicitly attributed overall 2021 plot-plan labels; footprint geometry remains provisional.

## Verification

`node scripts/check-geometry.mjs` passed for all six main wall segments: 56 / 120 Lafayette apertures, 84 / 100 Mulberry, 42 Houston, 81 schematic Jersey. Tests check aperture bounds, valid arch dimensions, nonintersecting bounding boxes, expected ornate-front counts and portal count. Module passes `node --check`.

Chrome visual checks covered all four fronts, top oblique, frame/exterior toggles, reset and source panel. No captured console errors. Saved comparison images: `research/v12-lafayette.png`, `v12-mulberry.png`, `v12-houston.png`, `v12-jersey.png`, `v12-roof.png` (local files).

## Deferred to plan calibration

- Trace the actual outer polygon and irregular construction seam; reconcile full frontage dimensions against 2021 plot plan and CBRE shell plans.
- Establish physical units and floor elevations from dimensioned sections; current envelope sizes remain approximate.
- Fully inventory Jersey's existing openings/infilled arches before claiming exact reconstruction.
- Trace piers, terracotta profiles, lower arcade and entrance from scaled drawings, and replace symbolic sculptures.
- Floor plates and interior framing are not reconstructed by this exterior correction. Frame view remains hypothetical.
- Roof equipment and modern penthouses require a separate time-period decision and supporting drawings.

## Plan acquisition

See `plan-sources.md` for inspected sources and `archive-request-draft.md` for an unsent request concerning 54 original drawing sheets. No external correspondence or paid order has been made.
