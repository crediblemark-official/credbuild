import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useId,
  useRef,
} from "react";
import { DragDropManager } from "@dnd-kit/dom";
import { DragDropEvents, Draggable, Droppable } from "@dnd-kit/abstract";

export type Events = DragDropEvents<any, any, DragDropManager>;
export type DragCbs = Partial<{
  [eventName in keyof Events]: { id: string; fn: Events[eventName] }[];
}>;

export const dragListenerContext = createContext<{
  dragListeners: DragCbs;
  setDragListeners?: Dispatch<SetStateAction<DragCbs>>;
}>({
  dragListeners: {},
});

type EventKeys = keyof Events;

export function useDragListener(
  type: EventKeys,
  fn: Events[EventKeys],
  deps: any[] = []
) {
  const { setDragListeners } = useContext(dragListenerContext);
  const id = useId();
  const fnRef = useRef(fn);

  useEffect(() => {
    fnRef.current = fn;
  }, [fn]);

  useEffect(() => {
    if (setDragListeners) {
      const wrappedFn = ((...args: any[]) => {
        // @ts-ignore - wrapped function type inference
        return fnRef.current(...args);
      }) as Events[EventKeys];

      setDragListeners((old) => ({
        ...old,
        [type]: [...(old[type] || []), { id, fn: wrappedFn }],
      }));

      return () => {
        setDragListeners((old) => ({
          ...old,
          [type]: (old[type] || []).filter((item) => item.id !== id),
        }));
      };
    }
  }, [type, setDragListeners, id]);
}
