"""Add_question_id_for_Answer_

Revision ID: e99c3cb120e9
Revises: 115cbe1b4a8e
Create Date: 2023-06-09 18:37:29.777702

"""

# revision identifiers, used by Alembic.
revision = 'e99c3cb120e9'
down_revision = '115cbe1b4a8e'

from alembic import op, context
import sqlalchemy as sa



def upgrade():
    schema_upgrades()
    if context.get_x_argument(as_dictionary=True).get('data', None):
        data_upgrades()

def downgrade():
    if context.get_x_argument(as_dictionary=True).get('data', None):
        data_downgrades()
    schema_downgrades()

def schema_upgrades():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('answer', sa.Column('question_id', sa.Integer(), nullable=False))
    op.create_foreign_key(None, 'answer', 'question', ['question_id'], ['id'])
    # ### end Alembic commands ###

def schema_downgrades():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'answer', type_='foreignkey')
    op.drop_column('answer', 'question_id')
    # ### end Alembic commands ###

def data_upgrades():
    pass

def data_downgrades():
    pass