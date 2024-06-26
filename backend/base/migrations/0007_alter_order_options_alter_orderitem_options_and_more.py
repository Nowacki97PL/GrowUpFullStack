# Generated by Django 5.0.1 on 2024-05-07 14:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0006_rename_ispaid_order_is_paid'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='order',
            options={'verbose_name_plural': 'Zamówienia'},
        ),
        migrations.AlterModelOptions(
            name='orderitem',
            options={'verbose_name_plural': 'Zamówione przedmioty'},
        ),
        migrations.AlterModelOptions(
            name='product',
            options={'verbose_name_plural': 'Produkty'},
        ),
        migrations.AlterModelOptions(
            name='review',
            options={'verbose_name_plural': 'Opinie'},
        ),
        migrations.AlterModelOptions(
            name='shippingaddress',
            options={'verbose_name_plural': 'Adresy dostaw'},
        ),
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, default='/placeholder.png', null=True, upload_to=''),
        ),
    ]
