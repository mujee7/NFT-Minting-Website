import { FiPlus, FiMinus } from "react-icons/fi";
import SectionTitle from "../../../../common/sectionTitle";
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon,
} from "../../../../common/accordion/Accordion";
import { data1, data2 } from "../../../../assets/data/faqDataV2";
import FAQStyleWrapper from "./Faq.style";

const FAQ = () => {
  return (
    <FAQStyleWrapper className="bithu_faq_sect" id="faq">
      <div className="container">
        <SectionTitle
          title="QUESTION & ANSWER"
          subtitle="Faq"
          className="section_title"
        />

        <div className="row faq_row">
          <div className="col-md-6">
            <div className="bithu_faq_content">
              <div className="bithu_faq_questions">
                <Accordion className="faq_questions">
                  {data1?.map((item, i) => (
                    <AccordionItem key={i}>
                      <AccordionTitle>
                        <h5>{item.title}</h5>
                        <IconWrapper>
                          <OpenIcon>
                            <FiMinus />
                          </OpenIcon>
                          <CloseIcon>
                            <FiPlus />
                          </CloseIcon>
                        </IconWrapper>
                      </AccordionTitle>
                      <AccordionBody>
                        <p>{item.text}</p>
                      </AccordionBody>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="bithu_faq_content">
              <div className="bithu_faq_questions">
                <Accordion className="faq_questions">
                  {data2?.map((item, i) => (
                    <AccordionItem key={i}>
                      <AccordionTitle onClick={() => console.log(i)}>
                        <h5>{item.title}</h5>
                        <IconWrapper>
                          <OpenIcon>
                            <FiMinus />
                          </OpenIcon>
                          <CloseIcon>
                            <FiPlus />
                          </CloseIcon>
                        </IconWrapper>
                      </AccordionTitle>
                      <AccordionBody>
                        <p>{item.text}</p>
                      </AccordionBody>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FAQStyleWrapper>
  );
};

export default FAQ;
