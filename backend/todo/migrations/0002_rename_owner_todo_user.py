# Generated by Django 4.1.2 on 2022-11-05 18:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='todo',
            old_name='owner',
            new_name='user',
        ),
    ]
