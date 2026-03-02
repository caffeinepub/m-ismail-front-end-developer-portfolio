import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactMessage {
    name: string;
    email: string;
    message: string;
    timestamp: Time;
}
export type Time = bigint;
export interface backendInterface {
    getAllMessages(): Promise<Array<ContactMessage>>;
    getMessagesByUser(email: string): Promise<ContactMessage>;
    messageExists(email: string): Promise<boolean>;
    submitContactMessage(name: string, email: string, message: string): Promise<void>;
    validateEmail(email: string): Promise<void>;
}
