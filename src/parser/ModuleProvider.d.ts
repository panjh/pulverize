import { Module } from "./entity/Module";

export interface ModuleProvider {

    get_module(name: string): Module|undefined;

}