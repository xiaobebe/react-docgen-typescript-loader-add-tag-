import * as React from "react";

interface SimpleComponentProps {
  /**
   * Button color.
   * @category dd
   * */
  color: "blue" | "green";
}

/**
 * A simple component.
 */
export const SimpleComponent: React.SFC<SimpleComponentProps> = props => (
  <button style={{ backgroundColor: props.color }}>{props.children}</button>
);
