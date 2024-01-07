'use client';
import { Button } from '@nextui-org/button';
import SvgtoReact from '../Svgtoreact';
import { Kbd } from '@nextui-org/kbd';
import FullLogo from '@/public/svg/fulllogo.svg';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
  ModalHeader,
  ModalFooter,
} from '@nextui-org/modal';
import { useState } from 'react';
import { PostProps } from '@/lib/types/blog';
import { Input } from '@nextui-org/input';

const SearchTrigger = ({ posts }: { posts: PostProps[] }) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchList, setSearchList] = useState<PostProps[]>([]);
  const changeInput = (e: { target: { value: string } }) => {
    if (e.target.value === '') {
      setSearchList([]);
      setSearchQuery(e.target.value);
      return;
    }
    setSearchQuery(e.target.value.toLowerCase());
    setSearchList(filterItems(posts, e.target.value.toLowerCase()));
    return;
  };
  const filterItems = (arr: PostProps[], query: any) => {
    return arr.filter(
      (el) =>
        el.meta.description?.toLowerCase().includes(query) ||
        el.meta.title?.toLowerCase().includes(query)
    );
  };
  const icontitle = (tag: string[]) =>
    tag.map((tag) => (
      <div key={tag}>
        <SvgtoReact height={20} width={20} name={tag.toLowerCase()} />
      </div>
    ));

  return (
    <>
      <Button
        onPress={onOpen}
        color="default"
        variant="flat"
        className="text-default-500"
        disableRipple
        startContent={<HiMiniMagnifyingGlass />}
        endContent={<Kbd keys={['command']}>K</Kbd>}
      >
        Search...
      </Button>
      <Modal
        isOpen={isOpen}
        size="2xl"
        backdrop="blur"
        onOpenChange={onOpenChange}
        scrollBehavior="inside"
        className="rounded-md bg-default-100/20"
        classNames={{
          body: 'p-0 gap-0 bg-default-100/20',
          header: 'p-0 bg-default-100/20',
          footer: 'bg-default-100/20',
        }}
        shouldBlockScroll={true}
        hideCloseButton={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <ModalHeader>
                  <Input
                    classNames={{
                      input: [
                        'focus:bg-transparent',
                        'bg-transparent',
                        'hover:bg-transparent',
                        'text-black/90 dark:text-white/90',
                        'placeholder:text-default-700/50 dark:placeholder:text-white/60',
                      ],
                      innerWrapper: ['bg-transparent', 'hover:bg-transparent'],
                      inputWrapper: [
                        'bg-transparent',
                        'bg-default-100/20',
                        'hover:bg-default-100/20',
                        'group-data-[focus=true]:bg-default-100/20',
                        '!cursor-text',
                      ],
                    }}
                    startContent={<HiMiniMagnifyingGlass />}
                    endContent={<Kbd keys={['escape']} />}
                  />
                </ModalHeader>
                <ModalBody>{JSON.stringify(posts)}</ModalBody>
                <ModalFooter className="flex flex-row items-center justify-between">
                  <p>whatever</p>
                  <FullLogo
                    height={20}
                    width={80}
                    className="place-self-center fill-content1-foreground stroke-content1-foreground  text-content1-foreground"
                  />
                </ModalFooter>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default SearchTrigger;
