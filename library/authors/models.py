from django.db import models


class Author(models.Model):
    first_name = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)
    birthday_year = models.PositiveIntegerField()

    def __str__(self) -> str:
        return f'{self.first_name} | {self.last_name} | {self.birthday_year}'


class Biography(models.Model):
    text = models.CharField(max_length=1024 ,null=True, blank=True)
    author = models.OneToOneField(Author, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.author


class Book(models.Model):
    name = models.CharField(max_length=128)
    authors = models.ManyToManyField(Author)

    def __str__(self) -> str:
        return self.name