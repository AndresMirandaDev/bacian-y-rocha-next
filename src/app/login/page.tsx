'use client';
import { Box, Button, Card, Flex, Text } from '@radix-ui/themes';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { RiLoginCircleLine } from 'react-icons/ri';
import LoadingScreen from '../components/LoadingScreen';
import MovingBackground from '../background/page';

const LoginPage = () => {
  return (
    <div className="flex h-screen w-screen  justify-center items-center bg-blue-950">
      <MovingBackground />
      <Flex
        direction="column"
        justify="center"
        align="center"
        className="w-full"
      >
        <Box className="md:h-1/2 md:w-1/2 shadow-2xl bg-[rgba(254,254,254,0.68813462885154064)] rounded-xl z-10 p-5">
          <Flex
            direction="column"
            justify="center"
            align="center"
            height="100%"
            gap="8"
          >
            <Flex direction="column" gap="3">
              <Text size="8" style={{ fontWeight: 'lighter' }}>
                Bienvenido
              </Text>
              <Image
                src={require('../../../public/assets/images/byrs.png')}
                alt="Logo"
                height={200}
                width={200}
              />
            </Flex>
            <Flex justify="center" align="center">
              <Button size="4" onClick={() => signIn()}>
                <Flex align="center" gap="2">
                  <RiLoginCircleLine />
                  <Text>Iniciar Sesión</Text>
                </Flex>
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};

export default LoginPage;
