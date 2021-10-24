import { ForwardedRef, forwardRef } from "react";
import clsx from 'clsx'

//@ts-ignore
import classes from './loader.module.css';

export interface LoaderProps extends HTMLDivElement {

}

export const Loader = forwardRef( ({className , children}: LoaderProps,ref:ForwardedRef<HTMLDivElement> ) => {
    return (
        <div className={clsx(classes.loader, className)} ref={ref}>
            {children}
        </div>
    );    
}); 