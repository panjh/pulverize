import * as vscode from 'vscode';
import { Context } from "./Context";
import { Entity } from "./Entity";

export class ContextEntity {
    entity: Entity;
    ctx: Context;

    constructor(entity: Entity, ctx: Context) {
        this.entity = entity;
        this.ctx = ctx;
    }

    get name(): string {
        return this.entity.name;
    }

    get rng(): vscode.Range {
        return this.entity.rng;
    }

    to_string(): string {
        return this.entity.to_string();
    }

    get_path(): string {
        return this.entity.get_path();
    }

    scope_contains(pos: number): boolean {
        return this.entity.scope_contains(pos);
    }

}