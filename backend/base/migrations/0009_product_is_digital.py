# Generated by Django 5.0.1 on 2024-06-20 16:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0008_review_created_at'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='is_digital',
            field=models.BooleanField(default=False),
        ),
    ]