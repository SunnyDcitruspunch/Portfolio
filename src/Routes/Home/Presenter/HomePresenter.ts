import IElementFinder from "../../../Commons/Interfaces/IElementFinder";
import IHomePresenter from "./IHomePresenter";

class HomePresenter implements IHomePresenter {
  private scene: any
  private camera: any
  private renderer: any

  constructor(
    private readonly elementFinder: IElementFinder,
    private readonly domDrawer: any) {}
  
  public initialize(): void {
    this.scene = new this.domDrawer.Scene()
    this.renderer = new this.domDrawer.WebGLRenderer({ alpha: true, antialias: true })
    this.camera = new this.domDrawer.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    const container = this.elementFinder.getElementById('home')
    console.log('container', container)

    if (container) {
      container.appendChild(this.renderer.domElement)
    }
  }

  public animate(): void {
    requestAnimationFrame(this.animate)
    // this.renderer.render(this.scene, this.camera)
  }
}

export default HomePresenter