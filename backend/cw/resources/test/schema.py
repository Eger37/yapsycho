import colander

from .._shared.schema import (
    GetCollectionBaseSchema,
)


class GetTestSchema(colander.MappingSchema):
    id = colander.SchemaNode(colander.Integer())


GetTestsSchema = GetCollectionBaseSchema(
    sort_fields=["id", "title", "subtitle", "description", "activ", "created_at"],
    filter_fields=[
        ("id", colander.List),
        "title", "subtitle", "description",
        ("created_at", colander.DateTime),
        ("activ", colander.Boolean),
    ],
)


class CreateTestSchema(colander.MappingSchema):
    title = colander.SchemaNode(colander.String())
    subtitle = colander.SchemaNode(colander.String())
    description = colander.SchemaNode(colander.String())
    activ = colander.SchemaNode(colander.Boolean())


class UpdateTestBaseSchema(colander.MappingSchema):
    title = colander.SchemaNode(colander.String())
    subtitle = colander.SchemaNode(colander.String())
    description = colander.SchemaNode(colander.String())
    activ = colander.SchemaNode(colander.Boolean())


class UpdateTestSchema(colander.MappingSchema):
    body = UpdateTestBaseSchema()
    path = GetTestSchema()


class ResponseTestBaseSchema(colander.MappingSchema):
    id = colander.SchemaNode(colander.Integer())
    created_by = colander.SchemaNode(colander.Integer())
    title = colander.SchemaNode(colander.String())
    subtitle = colander.SchemaNode(colander.String())
    description = colander.SchemaNode(colander.String())
    activ = colander.SchemaNode(colander.Boolean())
    created_at = colander.SchemaNode(colander.DateTime())


class ResponseBodyTestSchema(colander.MappingSchema):
    body = ResponseTestBaseSchema()


class ResponseBodyTestsSchema(colander.MappingSchema):
    @colander.instantiate(name="body")
    class BodyItemsTestSchema(colander.SequenceSchema):
        test = ResponseTestBaseSchema()
