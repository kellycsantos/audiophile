
'use client'
import { useRouter } from "next/navigation";
import Image from 'next/image';
import styles from './CardSuggestions.module.scss'
import { Button } from '@components';
import {OtherProductType} from "@/app/types";

type CardSuggestionsProps = {
  items: OtherProductType[]
}

const CardSuggestions = ({ items }: CardSuggestionsProps) => {
  const router = useRouter();

  const handleClick = (link: string) => {
    router.push(link);
  }

  return (
    <div className={styles.card_suggestions}>
      <h5>you may also like</h5>
      <div className={styles.suggestions_container}>
        {
          items.map((item: OtherProductType) => (
            <div className={styles.suggestions_item} key={item.slug}>
              <Image src={item?.image?.mobile} alt={item.name} width={200} height={200} />
              <h5>{item.name}</h5>
              <Button text='see product' variant='primary' onClick={() => handleClick(item.slug)} />
            </div>
          ))
        }
      </div>
    </div>

  )
}

export { CardSuggestions };
