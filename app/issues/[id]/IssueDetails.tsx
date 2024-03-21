import { IssueStatusBadge } from "@/app/component";
import { Issue } from "@prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import ReactMarkdown from "react-markdown";

const IssueDetails = ({ issue }: { issue: Issue }) => {
  const { title, status, createdAt, description } = issue;

  return (
    <>
      <Heading>{title}</Heading>
      <Flex gap="3" my="2">
        <IssueStatusBadge status={status} />
        <Text>{createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose max-w-full" mt="5">
        <ReactMarkdown>{description}</ReactMarkdown>
      </Card>
    </>
  );
};

export default IssueDetails;
