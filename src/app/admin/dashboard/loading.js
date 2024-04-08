import "../../../../components/ui/hamster.css"
export default function Loading() {
  return (

    <div style={{
      marginTop: "20rem",
      marginLeft: "50rem"

    }}>

      <div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster  ">
        <div class="wheel"></div>
        <div class="hamster">
          <div class="hamster__body">
            <div class="hamster__head">
              <div class="hamster__ear"></div>
              <div class="hamster__eye"></div>
              <div class="hamster__nose"></div>
            </div>
            <div class="hamster__limb hamster__limb--fr"></div>
            <div class="hamster__limb hamster__limb--fl"></div>
            <div class="hamster__limb hamster__limb--br"></div>
            <div class="hamster__limb hamster__limb--bl"></div>
            <div class="hamster__tail"></div>
          </div>
        </div>
        <div class="spoke"></div>
      </div>


    </div>


  );
}
