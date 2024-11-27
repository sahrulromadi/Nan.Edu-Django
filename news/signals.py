from django.db.models.signals import post_delete
from django.dispatch import receiver
from .models import News

@receiver(post_delete, sender=News)
def delete_image_on_news_delete(sender, instance, **kwargs):
    # Jika ada gambar yang terasosiasi dengan objek yang dihapus, hapus juga file gambar tersebut
    if instance.image:
        instance.image.delete(False)