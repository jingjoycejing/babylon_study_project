import {
  Scene,
  Engine,
  //FreeCamera,
  Vector3,
  HemisphericLight,
  MeshBuilder,
  Mesh,
  ArcRotateCamera,
  StandardMaterial,
  Texture,
  Color3,
} from '@babylonjs/core';

export class StandardMaterials {
  scene: Scene;
  engine: Engine;

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
    const camera = new ArcRotateCamera(
      'camera',
      -Math.PI / 2,
      Math.PI / 2.5,
      10,
      new Vector3(0, 0, 0)
    );
    camera.attachControl(this.canvas, true);
    const light = new HemisphericLight(
      'light',
      new Vector3(1, 1, 0),
      this.scene
    );
    const box = MeshBuilder.CreateBox('box', {});
    box.material = this.CreateBoxMaterial();
    const ball = MeshBuilder.CreateSphere('ball', { diameter: 1 }, this.scene);
    ball.position = new Vector3(1, 2, 1);
    ball.material = this.CreatBallMaterial();

    const ground = MeshBuilder.CreateGround('ground', {
      width: 10,
      height: 10,
    });

    ground.material = this.CreatGroundMaterial();

    return this.scene;
  }

  CreateBoxMaterial(): StandardMaterial {
    const boxMat = new StandardMaterial('boxMat', this.scene);
    const diffuseTex = new Texture('./src/assets/stone.jpg', this.scene);
    boxMat.diffuseTexture = diffuseTex;

    const nomalTex = new Texture('', this.scene);
    boxMat.ambientTexture = nomalTex;

    return boxMat;
  }

  CreatGroundMaterial(): StandardMaterial {
    const groundMat = new StandardMaterial('groundMat', this.scene);
    const diffuseTex = new Texture('./src/assets/stone.jpg', this.scene);
    groundMat.diffuseTexture = diffuseTex;
    return groundMat;
  }

  CreatBallMaterial(): StandardMaterial {
    const ballMat = new StandardMaterial('groundMat', this.scene);
    //const diffuseTex = new Texture('', this.scene);
    ballMat.diffuseColor = new Color3(0, 1, 0);
    return ballMat;
  }
}
