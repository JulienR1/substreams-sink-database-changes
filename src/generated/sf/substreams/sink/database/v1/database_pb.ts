// @generated by protoc-gen-es v1.3.3 with parameter "target=ts"
// @generated from file sf/substreams/sink/database/v1/database.proto (package sf.substreams.sink.database.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * @generated from message sf.substreams.sink.database.v1.DatabaseChanges
 */
export class DatabaseChanges extends Message<DatabaseChanges> {
  /**
   * @generated from field: repeated sf.substreams.sink.database.v1.TableChange table_changes = 1;
   */
  tableChanges: TableChange[] = [];

  constructor(data?: PartialMessage<DatabaseChanges>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sf.substreams.sink.database.v1.DatabaseChanges";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "table_changes", kind: "message", T: TableChange, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DatabaseChanges {
    return new DatabaseChanges().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DatabaseChanges {
    return new DatabaseChanges().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DatabaseChanges {
    return new DatabaseChanges().fromJsonString(jsonString, options);
  }

  static equals(a: DatabaseChanges | PlainMessage<DatabaseChanges> | undefined, b: DatabaseChanges | PlainMessage<DatabaseChanges> | undefined): boolean {
    return proto3.util.equals(DatabaseChanges, a, b);
  }
}

/**
 * @generated from message sf.substreams.sink.database.v1.TableChange
 */
export class TableChange extends Message<TableChange> {
  /**
   * @generated from field: string table = 1;
   */
  table = "";

  /**
   * @generated from oneof sf.substreams.sink.database.v1.TableChange.primary_key
   */
  primaryKey: {
    /**
     * @generated from field: string pk = 2;
     */
    value: string;
    case: "pk";
  } | {
    /**
     * @generated from field: sf.substreams.sink.database.v1.CompositePrimaryKey composite_pk = 6;
     */
    value: CompositePrimaryKey;
    case: "compositePk";
  } | { case: undefined; value?: undefined } = { case: undefined };

  /**
   * @generated from field: uint64 ordinal = 3;
   */
  ordinal = protoInt64.zero;

  /**
   * @generated from field: sf.substreams.sink.database.v1.TableChange.Operation operation = 4;
   */
  operation = TableChange_Operation.UNSPECIFIED;

  /**
   * @generated from field: repeated sf.substreams.sink.database.v1.Field fields = 5;
   */
  fields: Field[] = [];

  constructor(data?: PartialMessage<TableChange>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sf.substreams.sink.database.v1.TableChange";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "table", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pk", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "primary_key" },
    { no: 6, name: "composite_pk", kind: "message", T: CompositePrimaryKey, oneof: "primary_key" },
    { no: 3, name: "ordinal", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "operation", kind: "enum", T: proto3.getEnumType(TableChange_Operation) },
    { no: 5, name: "fields", kind: "message", T: Field, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TableChange {
    return new TableChange().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TableChange {
    return new TableChange().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TableChange {
    return new TableChange().fromJsonString(jsonString, options);
  }

  static equals(a: TableChange | PlainMessage<TableChange> | undefined, b: TableChange | PlainMessage<TableChange> | undefined): boolean {
    return proto3.util.equals(TableChange, a, b);
  }
}

/**
 * @generated from enum sf.substreams.sink.database.v1.TableChange.Operation
 */
export enum TableChange_Operation {
  /**
   * Protobuf default should not be used, this is used so that the consume can ensure that the value was actually specified
   *
   * @generated from enum value: OPERATION_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: OPERATION_CREATE = 1;
   */
  CREATE = 1,

  /**
   * @generated from enum value: OPERATION_UPDATE = 2;
   */
  UPDATE = 2,

  /**
   * @generated from enum value: OPERATION_DELETE = 3;
   */
  DELETE = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(TableChange_Operation)
proto3.util.setEnumType(TableChange_Operation, "sf.substreams.sink.database.v1.TableChange.Operation", [
  { no: 0, name: "OPERATION_UNSPECIFIED" },
  { no: 1, name: "OPERATION_CREATE" },
  { no: 2, name: "OPERATION_UPDATE" },
  { no: 3, name: "OPERATION_DELETE" },
]);

/**
 * @generated from message sf.substreams.sink.database.v1.CompositePrimaryKey
 */
export class CompositePrimaryKey extends Message<CompositePrimaryKey> {
  /**
   * @generated from field: map<string, string> keys = 1;
   */
  keys: { [key: string]: string } = {};

  constructor(data?: PartialMessage<CompositePrimaryKey>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sf.substreams.sink.database.v1.CompositePrimaryKey";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "keys", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CompositePrimaryKey {
    return new CompositePrimaryKey().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CompositePrimaryKey {
    return new CompositePrimaryKey().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CompositePrimaryKey {
    return new CompositePrimaryKey().fromJsonString(jsonString, options);
  }

  static equals(a: CompositePrimaryKey | PlainMessage<CompositePrimaryKey> | undefined, b: CompositePrimaryKey | PlainMessage<CompositePrimaryKey> | undefined): boolean {
    return proto3.util.equals(CompositePrimaryKey, a, b);
  }
}

/**
 * @generated from message sf.substreams.sink.database.v1.Field
 */
export class Field extends Message<Field> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * @generated from field: string new_value = 2;
   */
  newValue = "";

  /**
   * @generated from field: string old_value = 3;
   */
  oldValue = "";

  constructor(data?: PartialMessage<Field>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sf.substreams.sink.database.v1.Field";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "new_value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "old_value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Field {
    return new Field().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Field {
    return new Field().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Field {
    return new Field().fromJsonString(jsonString, options);
  }

  static equals(a: Field | PlainMessage<Field> | undefined, b: Field | PlainMessage<Field> | undefined): boolean {
    return proto3.util.equals(Field, a, b);
  }
}

