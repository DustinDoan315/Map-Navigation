import {View, Text, Image, Pressable, FlatList} from 'react-native';
import React from 'react';
import {icons} from '@assets/index';
import {color} from '@theme/index';
import VideoBanner from '@components/VideoBanner';
import Title from './Title';

const PlayBack = () => {
  const fakeDataHistory = [
    {
      sourceVideo: icons.short_2,
      title: 'Shorts',
      quality: '12',
      isShort: true,
      isPrivate: false,
    },
    {
      sourceVideo: icons.video_1,
      title: "What' Dustin?",
      quality: '18',
      isShort: false,
      isPrivate: false,
    },
    {
      sourceVideo: icons.video_1,
      title: 'Watch Late',
      quality: 0,
      isShort: false,
      isPrivate: true,
    },
  ];

  const _renderItem = ({item, index}: any) => {
    return (
      <View
        style={{
          width: 138,
          height: 154,
          marginRight: 16,
        }}>
        <View
          style={{
            width: '100%',
            height: 78,
            backgroundColor: color.dark_light_2,
            borderRadius: 8,
          }}>
          <VideoBanner
            justRenderVideo
            videoStyle={{
              width: 138,
              height: 78,
              overflow: 'hidden',
              borderWidth: 1,
              borderRadius: 8,
              borderColor: color.primaryText,
              marginTop: -12,
            }}
            sourceVideo={item?.sourceVideo}
          />
          {item?.isShort && (
            <Image
              resizeMode="contain"
              source={icons.isShort}
              style={{
                width: 24,
                height: 20,
                position: 'absolute',
                bottom: 6,
                right: 6,
              }}
            />
          )}
        </View>

        <View>
          <View
            style={{
              marginTop: 6,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 14,
                color: color.white,
              }}>
              {item?.title}
            </Text>

            <Image
              resizeMode="contain"
              source={icons.more}
              style={{
                width: 16,
                height: 16,
                marginRight: -6,
              }}
            />
          </View>

          <Text
            style={{
              fontSize: 12,
              marginTop: 1,
              color: color.secondText,
            }}>
            {item?.isPrivate ? 'Private' : `${item?.quality} watched`}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View style={{marginVertical: 12, marginHorizontal: 12}}>
      <Title icon={icons.playBack} title={'History'} />
      <FlatList
        horizontal
        data={fakeDataHistory}
        keyExtractor={(_, index: number) => index.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={_renderItem}
      />
    </View>
  );
};

export default PlayBack;
