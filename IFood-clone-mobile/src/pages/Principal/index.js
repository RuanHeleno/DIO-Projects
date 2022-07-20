import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, ActivityIndicator } from 'react-native';

import {
  SafeAreaView,
  ViewActivity,
  CategoriaView,
  BannerView,
  ViewPrincipal,
  ViewRestaurantes,
  TituloRestaurantes,
  ButtonTipoSelect,
  TextTipoSelect,
  SelectTipo
} from './style';

import RestauranteItem from '../../components/RestauranteItem';
import CategoriaItem from '../../components/CategoriaItem';
import BannerItem from '../../components/BannerItem';

export default function Principal() {
  const [banners, setBanners] = useState([])
  const [categorias, setCategorias] = useState([])
  const [restaurantes, setRestaurantes] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [tipo, setTipo] = useState('Entrega')
  
  useEffect(() => {
    async function buscaDados() {
      try {
        const response = await fetch('http://my-json-server.typicode.com/pablohdev/app-ifood-clone/db')
        const data = await response.json()

        setLoaded(true)

        setBanners(data.banner_principal) 
        setCategorias(data.categorias) 
        setRestaurantes(data.restaurantes) 
      } catch(e) {
        Alert.alert('Erro ao consultar' + e)
      }
    } 

    buscaDados()
  }, [])

  const ViewHome = (props) => {
    return (
      <ViewPrincipal>
        <SelectTipo>
          <ButtonTipoSelect onPress={() => setTipo('Entrega')}>
            <TextTipoSelect selected={tipo === 'Entrega'}>
              Entrega
            </TextTipoSelect>
          </ButtonTipoSelect>
          <ButtonTipoSelect onPress={() => setTipo('Retirada')}>
            <TextTipoSelect selected={tipo === 'Retirada'}>
              Retirada
            </TextTipoSelect>
          </ButtonTipoSelect>
        </SelectTipo>
        <CategoriaView horizontal={true} showsVerticalScrollIndicator={false}>
          {categorias.map(categoria => (
            <CategoriaItem 
              key={categoria.id} 
              foto={categoria.img_url}
              texto={categoria.nome}
            />
          ))}
        </CategoriaView>
        <BannerView horizontal={true} showsVerticalScrollIndicator={false}>
          {banners.map(banner => (
            <BannerItem 
              key={banner.id}
              foto={banner.banner_img_url}
            />
          ))}
        </BannerView>
        <TituloRestaurantes>Restaurantes</TituloRestaurantes>
        <ViewRestaurantes>
          {restaurantes.map(restaurante => (
            <RestauranteItem 
              key={restaurante.id}
              foto={restaurante.url_img}
              nome={restaurante.nome}
              nota={restaurante.nota}
              categoria={restaurante.categoria}
              distancia={restaurante.distancia}
              valorEntrega={restaurante.valor_frete}
              tempoEntrega={restaurante.tempo_entrega}
            />
          ))}
        </ViewRestaurantes>
      </ViewPrincipal>
    )
  }
  
  return(
    <>
      <StatusBar />
      <SafeAreaView>
        {
          loaded ? (
            <ViewHome />
          ) : (
            <ViewActivity>
              <ActivityIndicator color='red' size="large" />
            </ViewActivity>
          )
        }
      </SafeAreaView>
    </>
  )
}
