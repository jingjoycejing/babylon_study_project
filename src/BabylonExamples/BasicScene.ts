import {
  Scene,
  Engine,
  //FreeCamera,
  Vector3,
  HemisphericLight,
  MeshBuilder,
  Mesh,
  ArcRotateCamera,
} from '@babylonjs/core';

export class BasicScene {
  scene: Scene;
  engine: Engine;
  camera: ArcRotateCamera;
  light: HemisphericLight;
  box: Mesh;
  ground: Mesh;

  constructor(private canvas: HTMLCanvasElement) {
    this.engine = new Engine(this.canvas, true);
    this.scene = this.CreatScene();

    this.engine.runRenderLoop(() => {
      this.scene.render();
    });
  }

  CreatScene(): Scene {
    this.scene = new Scene(this.engine);
    //this.camera = new FreeCamera('camera', new Vector3(1, 0, 0), this.scene);
    /**** Set camera and light *****/
    this.camera = new ArcRotateCamera(
      'camera',
      -Math.PI / 2,
      Math.PI / 2.5,
      10,
      new Vector3(0, 0, 0)
    );
    this.camera.attachControl(this.canvas, true);
    this.light = new HemisphericLight(
      'light',
      new Vector3(1, 1, 0),
      this.scene
    );
    this.box = MeshBuilder.CreateBox('box', {});
    this.ground = MeshBuilder.CreateGround('ground', {
      width: 10,
      height: 10,
    });

    return this.scene;
  }
}
