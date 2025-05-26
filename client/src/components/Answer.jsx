import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

export const Answer = ({ ans }) => {
  return (
    <div className="prose prose-invert max-w-none text-zinc-300">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkBreaks]}
        components={{
          p: ({ node, children, ...props }) => {
            // If children has <pre> or block element, skip <p>
            const hasBlock = children.some?.(
              (child) => typeof child === "object" && child?.type === "pre"
            );
            if (hasBlock) {
              return <>{children}</>;
            }
            return (
              <p className="mb-4 leading-relaxed" {...props}>
                {children}
              </p>
            );
          },
          code({ node, inline, className, children, ...props }) {
            return inline ? (
              <code
                className="bg-zinc-800 px-1.5 py-0.5 rounded text-sm font-mono"
                {...props}
              >
                {children}
              </code>
            ) : (
              <pre className="bg-[#1e1e1e] text-gray-200 px-4 py-3 rounded-md border border-gray-700 w-full overflow-x-auto shadow-sm my-4">
                <code
                  className={`text-sm font-mono whitespace-pre-wrap break-words ${className}`}
                  {...props}
                >
                  {children}
                </code>
              </pre>
            );
          },
          pre: ({ node, ...props }) => (
            <div {...props} className="my-4" /> // Just pass through, handled by code component
          ),
          ul: ({ node, ...props }) => (
            <ul className="list-disc pl-6 mb-4" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal pl-6 mb-4" {...props} />
          ),
        }}
      >
        {ans.trim()}
      </ReactMarkdown>
    </div>
  );
};
