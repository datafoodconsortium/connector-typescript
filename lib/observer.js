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
 * SUBSCRIPTION
 * This is mainly for internal use by Observable, based on RxJS but simplified:
 * {@link https://rxjs.dev/api/index/class/Subscription}
 * For the complete implementation:
 * {@link https://github.com/ReactiveX/rxjs/blob/8.0.0-alpha.14/packages/rxjs/src/internal/Observable.ts#L49-L179}
 */
export class Subscription {
    constructor(initialTeardown) {
        this.initialTeardown = initialTeardown;
        this.closed = false;
        this.finalizers = null;
    }
    unsubscribe() {
        if (!this.closed) {
            this.closed = true;
            const { finalizers, initialTeardown } = this;
            this.finalizers = new Set();
            if (typeof initialTeardown === 'function')
                initialTeardown();
            if (finalizers)
                finalizers.forEach((teardown) => {
                    if (typeof teardown === 'function')
                        teardown();
                    else if (teardown)
                        teardown.unsubscribe();
                });
        }
    }
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
export class Observable {
    _subscribe(_subscriber) {
        return;
    }
    constructor(subscribe) {
        this.subscribers = new Set();
        this.finalizers = new WeakMap();
        if (subscribe)
            this._subscribe = subscribe;
    }
    subscribe(observerOrNext, error, complete) {
        let observer;
        if (typeof observerOrNext === 'function') {
            observer = {
                next: observerOrNext,
                error: typeof error === 'function' ? error : (_) => { },
                complete: typeof complete === 'function' ? complete : () => { },
            };
        }
        else {
            observer = observerOrNext;
        }
        this.subscribers.add(observer);
        const finalizer = this._subscribe(observer);
        if (typeof finalizer === 'function') {
            const subscription = new Subscription(finalizer);
            this.finalizers.set(observer, finalizer);
            return subscription;
        }
        return new Subscription();
    }
}
//# sourceMappingURL=observer.js.map