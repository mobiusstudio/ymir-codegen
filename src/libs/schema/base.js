/* eslint-disable no-param-reassign */
import joi from 'joi'
import { schemaRules } from '../types/schema'

export class ColumnBase {
  constructor({
    schemaName,
    tableName,
    type,
    name,
    alias = null,
    foreign = null,
    required = false,
    default: def = null,
  }) {
    if (joi.validate({
      schemaName,
      tableName,
      type,
      name,
      alias,
      foreign,
      required,
      default: def,
    }, schemaRules.column)) {
      this.schemaName = schemaName
      this.tableName = tableName
      this.type = type
      this.name = name
      this.alias = alias
      this.foreign = foreign
      this.required = required
      this.default = def
    }
  }
}

export class TableBase {
  constructor({
    schemaName,
    tableName,
    pkeyIndex = 0,
    columns = [],
  }) {
    if (joi.validate({
      schemaName,
      tableName,
      pkeyIndex,
      columns,
    }, schemaRules.table)) {
      this.schemaName = schemaName
      this.tableName = tableName
      this.pkeyIndex = pkeyIndex
      this.columns = columns
    }
  }
}

export class SchemaBase {
  constructor({
    schemaName,
    tables = [],
  }) {
    if (joi.validate({
      schemaName,
      tables,
    }, schemaRules.schema)) {
      this.schemaName = schemaName
      this.tables = tables
    }
  }
}
