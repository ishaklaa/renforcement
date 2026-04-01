<?php

class Produit
{
    private $nom;
    private $prix;
    private $stock;

    public function _construct($nom, $prix, $stock)
    {
        $this->nom = $nom;
        $this->prix = $prix;
        $this->stock = $stock;
    }


    public function getNom()
    {
        return $this->nom;
    }

    public function getPrix()
    {
        return $this->prix;
    }

    public function getStock()
    {
        return $this->stock;
    }

    public function setNom($nom)
    {
        $this->nom = $nom;
    }

    public function setPrix($prix)
    {
        if ($prix <= 0) {
            echo "le prix est negatif ";
        } else {
            $this->prix = $prix;
        }
    }

    public function setStock($stock)
    {
        if ($this->stock <= 0) {
            echo "le stock est negatif";
        } else {
            $this->stock = $stock;
        }
    }
    public function afficher()
    {
        echo '[' . $this->nom . '] - [' . $this->prix . '] $' . $this->stock;
    }
}

$cahier = new Produit();
$cahier->setNom('diftar');
$cahier->setPrix(-5);
$cahier->setStock(10);

