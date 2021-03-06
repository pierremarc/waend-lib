import { CoordPolygon, CoordLinestring } from './Geometry';
export * from './BaseSource';
export * from './Geometry';
export * from './Stream';
export * from './Transform';
export * from "./Config";
export * from "./Model";
export * from "./Mutex";
export * from "./Worker";
export declare type ImageAdjust = 'none' | 'fit' | 'cover';
export interface ImageOptions {
    image: string;
    adjust: ImageAdjust;
    clip: boolean;
    rotation?: number;
}
export declare type PolygonEnd = 'closePath' | 'stroke' | 'fill' | 'clip';
export declare type PolygonEnds = PolygonEnd[];
export declare type ClipCommand = 'end' | 'begin';
export declare type ContextValue = boolean | string | number | number[];
export declare type DrawingInstructionBase = [string];
export declare type DrawingInstructionPoint = [string, number, number];
export declare type DrawingInstructionQuadratic = [string, number, number, number, number];
export declare type DrawingInstructionBezier = [string, number, number, number, number, number, number];
export declare type DrawingInstruction = DrawingInstructionBase | DrawingInstructionPoint | DrawingInstructionQuadratic | DrawingInstructionBezier;
export declare type PainterCommandApplyTexture = ['applyTexture', string];
export declare type PainterCommandClear = ['clear'];
export declare type PainterCommandClearRect = ['clearRect', number[]];
export declare type PainterCommandEndTexture = ['endTexture'];
export declare type PainterCommandImage = ['image', CoordPolygon, number[], ImageOptions];
export declare type PainterCommandInstructions = ['instructions', DrawingInstruction[]];
export declare type PainterCommandLine = ['line', CoordLinestring];
export declare type PainterCommandPolygon = ['polygon', CoordPolygon, PolygonEnds];
export declare type PainterCommandRestore = ['restore'];
export declare type PainterCommandSave = ['save'];
export declare type PainterCommandSet = ['set', string, ContextValue];
export declare type PainterCommandStartTexture = ['startTexture', string];
export declare type PainterCommandTransform = ['transform', number, number, number, number, number, number];
export declare type PainterCommand = PainterCommandClear | PainterCommandApplyTexture | PainterCommandClearRect | PainterCommandEndTexture | PainterCommandImage | PainterCommandInstructions | PainterCommandLine | PainterCommandPolygon | PainterCommandRestore | PainterCommandSave | PainterCommandSet | PainterCommandStartTexture | PainterCommandTransform;
