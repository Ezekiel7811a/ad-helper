import { MyNode } from "@/models/node";

const GCS = new MyNode(
  "Geometric Correction Scheme (GCS)",
  [],
  (
    <div>
      (Wens et al. 2015) Spatial leakage effects are particularly confounding
      for seed-based investigations of brain networks using source-level
      electroencephalography (EEG) or magnetoencephalography (MEG). Various
      methods designed to avoid this issue have been introduced but are limited
      to particular assumptions about its temporal characteristics. Here, we
      investigate the usefulness of a model-based geometric correction scheme
      (GCS) to suppress spatial leakage emanating from the seed location. We
      analyze its properties theoretically and then assess potential advantages
      and limitations with simulated and experimental MEG data (resting state
      and auditory-motor task). To do so, we apply Minimum Norm Estimation (MNE)
      for source reconstruction and use variation of error parameters,
      statistical gauging of spatial leakage correction and comparison with
      signal orthogonalization. Results show that the GCS has a local (i.e.,
      near the seed) effect only, in line with the geometry of MNE spatial
      leakage, and is able to map spatially all types of brain interactions,
      including linear correlations eliminated after signal orthogonalization.
      Furthermore, it is robust against the introduction of forward model
      errors. On the other hand, the GCS can be affected by local overcorrection
      effects and seed mislocation. These issues arise with signal
      orthogonalization too, although significantly less extensively, so the two
      approaches complement each other. The GCS thus appears to be a valuable
      addition to the spatial leakage correction toolkits for seed-based FC
      analyses in source-projected MEG/EEG data
    </div>
  )
);

export const Wrapper = () => <>{GCS.content}</>;

export default GCS;
