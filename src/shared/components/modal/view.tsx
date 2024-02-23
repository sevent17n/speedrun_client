import { FC, useRef } from "react";
import { ModalProps } from "./types";
import { useClickOutside } from "@/shared/hooks/useClickOutside";
import clsx from "clsx";
import styles from "./styles.module.scss";

export const Modal: FC<ModalProps> = ({ open, onClose, children }) => {
  const ref = useRef(null);
  useClickOutside(ref, onClose);

  return (
    <div
      ref={ref}
      className={clsx(styles.base, {
        [styles.opened]: open,
        [styles.closed]: !open,
      })}
    >
      {children}
    </div>
  );
};
