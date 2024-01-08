'use client';
import { Button } from '@nextui-org/button';
import SvgtoReact from '../Svgtoreact';
import { Kbd } from '@nextui-org/kbd';
import FullLogo from '@/public/svg/fulllogo.svg';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';
import { HiArrowLongRight } from 'react-icons/hi2';
import Github from '@/public/svg/github.svg';
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
import { Link } from '@nextui-org/link';
import { Divider } from '@nextui-org/react';

const SearchTrigger = ({ posts }: { posts: PostProps[] }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchList, setSearchList] = useState<PostProps[]>(posts);
  const changeInput = (e: { target: { value: string } }) => {
    if (e.target.value === '') {
      setSearchList(posts);
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
  const IconTitle = ({ tag }: { tag: string[] }) =>
    tag.map((tag) => (
      <SvgtoReact key={tag} height={25} width={25} name={tag.toLowerCase()} />
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
        className="border border-divider bg-default-100/50 text-lg"
        radius="lg"
        classNames={{
          body: 'p-0 gap-0',
          header: 'p-0',
          footer:
            'flex flex-row items-center justify-between border-t border-divider p-unit-sm',
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
                    onChange={(e) => changeInput(e)}
                    maxLength={50}
                    radius="lg"
                    variant="flat"
                    placeholder="search the happy programmer"
                    classNames={{
                      input: [
                        'focus:bg-transparent',
                        'bg-transparent hover:bg-transparent',
                        'text-black/90 dark:text-white/90',
                        'placeholder:text-default-700/50',
                      ],
                      innerWrapper: ['bg-transparent', 'hover:bg-transparent'],
                      inputWrapper: [
                        'bg-transparent',
                        'bg-default-100/0',
                        'hover:bg-default-100/0',
                        'group-data-[focus=true]:bg-default-100/0',
                        '!cursor-text',
                        'group-data-[hover=true]:bg-default-100/0',
                        'rounded-b-none',
                        'shadow-none',
                        'border-divider border-b',
                      ],
                    }}
                    startContent={<HiMiniMagnifyingGlass />}
                    endContent={<Kbd keys={['escape']} />}
                  />
                </ModalHeader>
                <ModalBody>
                  {searchList.length === 0 && (
                    <div className="flex flex-col items-center justify-center p-unit-xl">
                      <p className="text-lg">
                        no results for &quot;{searchQuery}&quot;
                      </p>
                      <p className="text-sm text-default-600">
                        Search something else
                      </p>
                    </div>
                  )}
                  <div className="flex flex-col gap-y-unit-sm py-unit-sm">
                    {searchList.length !== 0 && searchQuery.length !== 0 && (
                      <>
                        <div className="py-unit-sm">
                          <div className="flex flex-row justify-between px-unit-md">
                            <p>{searchList.length === 1 ? 'Post' : 'Posts'}</p>
                            {searchList.length}
                          </div>
                        </div>
                        <Divider />
                      </>
                    )}
                    {searchList.map((e) => (
                      <div key={e.meta.title} className="px-unit-sm">
                        <Button
                          href={e.link}
                          onClick={onClose}
                          className="flex h-auto w-full flex-row justify-between bg-default-400/50 shadow-sm dark:bg-default-300/50"
                          as={Link}
                          disableRipple
                          color="default"
                          variant="flat"
                          startContent={<IconTitle tag={e.meta.categories} />}
                          endContent={<HiArrowLongRight />}
                        >
                          <div className="mr-auto flex max-w-sm flex-col gap-y-unit-1 py-unit-sm pl-unit-xs">
                            <p className="truncate" title={e.meta.title}>
                              {e.meta.title}
                            </p>
                            <p
                              className="max-w-lg truncate text-xs text-default-600"
                              title={e.meta.description}
                            >
                              {e.meta.description}
                            </p>
                          </div>
                        </Button>
                      </div>
                    ))}
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button
                    as={Link}
                    className=""
                    variant="ghost"
                    color="default"
                    disableRipple
                    startContent={<Github className="h-unit-md" />}
                    href="https://github.com/MyNameIsBond"
                  >
                    github
                  </Button>
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
