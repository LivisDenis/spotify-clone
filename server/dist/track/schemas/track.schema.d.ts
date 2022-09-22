import { Document, Model } from 'mongoose';
import * as mongoose from "mongoose";
import { Comment } from "./comment.schema";
export declare type TrackDocument = Track & Document;
export declare class Track {
    name: string;
    artist: string;
    text: string;
    listens: number;
    picture: string;
    audio: string;
    comments: Comment[];
}
export declare const TrackSchema: mongoose.Schema<Track, Model<Track, any, any, any, any>, {}, {}, {}, {}, "type", Track>;
