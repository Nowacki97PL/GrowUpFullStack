# Generated by Django 5.0.1 on 2024-08-31 11:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0011_trainer'),
    ]

    operations = [
        migrations.AlterField(
            model_name='trainer',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='trainers/'),
        ),
    ]
