/**
 * OBSERVERS & OBSERVABLES
 * For adding behaviors and side effects to the Connectors core methods. Unlike
 * the PHP version, which uses an OOP-style Observer Pattern, this hews more
 * to the reactive programming model, which is more prevalent in TypeScript.
 * Roughly based on the RxJS v8 implementation, but greatly simplified:
 * {@link https://rxjs.dev/guide/overview}
 * {@link https://github.com/ReactiveX/rxjs/blob/8.0.0-alpha.14/packages/rxjs/src/internal/types.ts}
 */
/**
 * OBSERVER
 * {@link https://rxjs.dev/api/index/interface/Observer}
 */
export interface Observer<T> {
    next(value: T): void;
    error(error: any): void;
    complete(): void;
}
/**
 * UNSUBSCRIBABLE
 * {@link https://rxjs.dev/api/index/interface/Unsubscribable}
 */
export interface Unsubscribable {
    closed: boolean;
    unsubscribe(): void;
}
/**
 * SUBSCRIBABLE
 * {@link https://rxjs.dev/api/index/interface/Subscribable}
 */
export interface Subscribable<T> {
    subscribe(observer: Partial<Observer<T>>): Unsubscribable;
}
/**
 * TEARDOWN
 * {@link https://rxjs.dev/api/index/type-alias/TeardownLogic}
 */
export type Teardown = Subscription | Unsubscribable | (() => void) | void;
/**
 * SUBSCRIPTION-LIKE
 */
export interface SubscriptionLike extends Unsubscribable {
    unsubscribe(): void;
    readonly closed: boolean;
}
/**
 * SUBSCRIPTION
 * This is mainly for internal use by Observable, based on RxJS but simplified:
 * {@link https://rxjs.dev/api/index/class/Subscription}
 * For the complete implementation:
 * {@link https://github.com/ReactiveX/rxjs/blob/8.0.0-alpha.14/packages/rxjs/src/internal/Observable.ts#L49-L179}
 */
export declare class Subscription implements SubscriptionLike {
    private initialTeardown?;
    closed: boolean;
    private finalizers;
    constructor(initialTeardown?: (() => void) | undefined);
    unsubscribe(): void;
}
/**
 * OBSERVABLE
 * For adding behaviors and side effects to the Connectors core methods, using
 * the observer pattern. This is roughly based on the RxJS v8 implementation,
 * but greatly simplified:
 * {@link https://rxjs.dev/api/index/class/Observable}
 * For the full implementation:
 * {@link https://github.com/ReactiveX/rxjs/blob/8.0.0-alpha.14/packages/rxjs/src/internal/Observable.ts#L551-L1008}
 */
export declare class Observable<T> implements Subscribable<T> {
    protected subscribers: Set<Observer<T>>;
    protected finalizers: WeakMap<Observer<T>, Teardown>;
    private _subscribe;
    constructor(subscribe?: (this: Observable<T>, subscriber: Observer<T>) => Teardown | void);
    subscribe(observerOrNext?: Partial<Observer<T>> | ((value: T) => void), error?: (error: any) => void, complete?: () => void): Subscription;
}
//# sourceMappingURL=observer.d.ts.map