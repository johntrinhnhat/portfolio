import { Box, Center } from "@chakra-ui/react";
import DiaDevider from "./DiaDevider";

const ContactForm = () => {
  return (
    <>
      <Center my="6rem" px="4rem">
        <form className="form w-100">
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Name
            </label>
            <input type="text" className="form-control bg-dark bg-gradient bg-opacity-10 text-white" />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Email
            </label>
            <input type="email" className="form-control bg-dark bg-gradient bg-opacity-10 text-white" />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Message
            </label>
            <textarea className="form-control bg-dark bg-gradient bg-opacity-10 text-white" id="" rows={15}></textarea>
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </Center>
      <DiaDevider
        Diamond1="#2B6CB0"
        Diamond2="#2B6CB0"
        Diamond3="#2B6CB0"
        Diamond4="#2B6CB0"
      />
      <Box mt='3rem'></Box>
    </>
  );
};

export default ContactForm;
