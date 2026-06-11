declare module "gsap-trial/SplitText" {
  export class SplitText {
    constructor(
      targets:
        | string
        | string[]
        | Element
        | Element[]
        | NodeListOf<Element>,
      vars?: Record<string, any>
    );
    revert(): void;
    animate?: boolean;
    lines: Element[];
    words: Element[];
    chars: Element[];
  }
}
