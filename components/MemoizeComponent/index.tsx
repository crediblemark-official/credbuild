import { deepEqual } from "fast-equals";
import { ComponentType, memo } from "react";
import { shallowEqual } from "../../lib/shallow-equal";

const RenderComponent = ({
  Component,
  componentProps: renderProps,
}: {
  Component: ComponentType<any>;
  componentProps: any;
}) => {
  return <Component {...renderProps} />;
};

/**　Renders the Component and only re-renders when its props change using shallow comparison. Uses deep comparison for the "credbuild" prop. */
export const MemoizeComponent = memo(RenderComponent, (prev, next) => {
  let credbuildEquals = true;
  if ("credbuild" in prev.componentProps && "credbuild" in next.componentProps) {
    credbuildEquals = deepEqual(prev.componentProps.credbuild, next.componentProps.credbuild);
  }

  return (
    prev.Component === next.Component &&
    shallowEqual(prev.componentProps, next.componentProps, ["credbuild"]) &&
    credbuildEquals
  );
});
