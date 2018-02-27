import {
  Directive,
  ElementRef,
  AfterViewChecked,
  Input,
  HostListener
} from "@angular/core";

@Directive({
  selector: "[appEquiheight]"
})
export class EquiheightDirective implements AfterViewChecked {
  @Input() appEquiheight: any;

  constructor(private el: ElementRef) {}

  ngAfterViewChecked() {
    //let angular run the lifecycles and call the method
    // once the view has been scanned and initialized by angular.

    this.equalizeHeight(this.el.nativeElement, this.appEquiheight);
  }

  @HostListener("window:resize")
  onResize() {
    //on resize, we need to recalculate the height as the text wraps and height changes
    this.equalizeHeight(this.el.nativeElement, this.appEquiheight);
  }

  /***************************************************************************
   * Function that dynamically equalize the height of each button on resize.
   * Parent:     The element to which the directive is attached
   * className:  The classname of the button which is a string, whose height
   *             needs to be equalized
   ***************************************************************************/

  equalizeHeight(parent: HTMLElement, className: string) {
    if (!parent) return;

    // get all elements with the class name of td-btn
    const children = parent.getElementsByClassName(className);

    if (!children) return;

    // reset all children height
    Array.from(children).forEach((x: HTMLElement) => {
      x.style.height = "initial";
    });

    // gather all height
    const itemHeights = Array.from(children).map(
      x => x.getBoundingClientRect().height
    );

    // find max height among all buttons.
    const maxHeight = itemHeights.reduce((prev, curr) => {
      return curr > prev ? curr : prev;
    }, 0);

    // apply max height of the above calculation to each button.
    Array.from(children).forEach(
      (x: HTMLElement) => (x.style.height = `${maxHeight}px`)
    );
  }
}
