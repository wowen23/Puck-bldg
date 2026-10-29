# Orientation and footprint audit — 2026-10-29

Scope: local v11 source and 2011 LPC presentation, PDF page 4 proposed eighth-floor plan; existing elevations on pages 7 (Mulberry) and 11 (Lafayette). No source changes in this audit.

## Confirmed: plan-to-world mapping reverses handedness

Source plan labels put East Houston at the left end, Jersey at the right end, Lafayette along the bottom, and Mulberry along the top. Original building is the Houston/left part; 1897 addition is the Jersey/right part. Existing Lafayette elevation p11 has the lower wing at image left, taller wing at image right. Existing Mulberry elevation p7 has taller wing left, lower wing right.

The model stores plan coordinates with x increasing Houston→Jersey and z increasing Lafayette→Mulberry. Its Lafayette camera is at (0,8,-37). With y up, this camera's screen-right direction is negative x. Thus the lower Houston wing appears at screen right: the opposite of the existing Lafayette elevation. The problem is a reflection, not a rotation; orbiting or rotating the whole model does not repair geographic handedness.

Recommended safe correction: retain outline arrays as documented plan-space coordinates, but mirror both `ext` and `frame` groups across z (`scale.z=-1`), and change the Lafayette view camera to positive z. Document the resulting world axes: x runs Houston→Jersey; world +z faces Lafayette and world -z faces Mulberry. This preserves every entrance, ornament and equipment attachment relative to its own wall. Alternatively map every coordinate at construction time, but that requires touching many unrelated places and risks inconsistent attachments.

Validation: Lafayette view must show low wing left, high wing right; Mulberry view must show high wing left, low wing right; Houston view must be at negative x and Jersey at positive x. This is supported by drawings, not inferred measurement.

## Roof transform is internally correct

`roofPlate` creates a 2D Shape at `(u,v,0)`, rotates X by -90° to `(u,0,-v)`, then scales z by -1 to `(u,0,v)`. That final vertex position agrees with the wall footprint coordinates. Removing the z scale would create a mirrored roof misalignment. Double-sided material is already used. A later global group reflection applies equally to roofs and walls, so remains aligned.

## Footprint fidelity is still approximate

The source is an eighth-floor proposed plan, not a measured street-level survey. No coordinate in the current polygon is a verified architectural measurement. The plan supports a tapered parcel, straight Lafayette baseline, sloped Mulberry boundary and clipped/rounded corners; it does not justify treating each current vertex or shared seam as exact. The current Lafayette vertices have a noticeable bend and should eventually be traced against a single calibrated source coordinate system. Do not substitute retail frontage numbers directly as full-building dimensions without establishing their scope.

The high/low seam is a simplified full-width split. Page 4's dashed construction seam runs at differing x positions across the two sides, with an irregular roof/occupied-space relationship. Existing elevations support distinct street-side transition locations: Lafayette has four low bays and six high bays; Mulberry has six low bays and five high bays. This is evidence for a stepped/nonuniform transition, but the exact 3D seam needs a trace or additional roof plan. Avoid speculative restructuring during the safe orientation correction.

## Evidence and confidence

- Street labels and wing order: directly read, high confidence.
- Camera screen-right basis and roof vertex transform: deterministic source-code geometry, high confidence.
- Full parcel dimensions, roof seam depth and construction phase boundaries in 3D: unresolved; no measurements claimed.
