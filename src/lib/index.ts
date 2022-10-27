import EventEmitter from 'eventemitter3';

// Singleton - Event Emitter
const EE = new EventEmitter();


export const addListener = (event: string, fn: (...args) => void) => EE.addListener(event, fn);
export const emit = (event: string, ...args) => EE.emit(event, args);
export const removeListener = (event: string, fn: (...args) => void) => EE.removeListener(event, fn);