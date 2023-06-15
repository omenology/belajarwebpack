import Heading from "../heading/heading.js";
import KiwiImage from "../kiwi-image/kiwi-image.js";

class KiwiPage {
  render() {
    const heading = new Heading();
    heading.render("kiwi");
    const kiwiImage = new KiwiImage();
    kiwiImage.render();

    import('HelloWorldApp/HelloWordlButton').then(res=>{
      const HelloWordlButton = res.default
      new HelloWordlButton().render()
    })
  }
}

export default KiwiPage