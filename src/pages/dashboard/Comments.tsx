import { useEffect, useState, useMemo } from 'react';
import { api } from '@/services/api';
import FilterSelect from '@/components/FilterSelect';

interface Comment {
  id: number;
  name: string;
  body: string;
  email: string;
}

interface FilterOption {
  label: string;
  value: string;
}

function Comments() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [filteredComments, setFilteredComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedAuthor, setSelectedAuthor] = useState<FilterOption | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await api.get('/comments');
        const enhancedComments = response.data.map((comment: Comment) => ({
          ...comment,
          name: comment.email.split('@')[0]
        }));

        setComments(enhancedComments);
        setFilteredComments(enhancedComments);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const authorOptions: FilterOption[] = useMemo(() => 
    [...new Set(comments.map(comment => comment.email))].map(email => ({
      label: email.split('@')[0],
      value: email.toLowerCase(),
    })), [comments]
  );

  const handleAuthorFilter = (option: FilterOption | null) => {
    setSelectedAuthor(option);
    if (!option) {
      setFilteredComments(comments);
    } else {
      const filtered = comments.filter(comment => 
        comment.email.toLowerCase() === option.value.toLowerCase()
      );
      setFilteredComments(filtered);
    }
  };

  console.log('Currently displayed comments:', filteredComments);

  return (
    <div className="space-y-6">
      {/* Filter Section */}
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Filter by Author
        </label>
        <FilterSelect
          options={authorOptions}
          value={selectedAuthor}
          onChange={handleAuthorFilter}
          placeholder="Select an author..."
        />
      </div>

      {isLoading ? (
        <div className="text-gray-600">Loading...</div>
      ) : (
        <div className="space-y-4">
          {filteredComments.map((comment) => (
            <div key={comment.id} className="border rounded-lg p-4">
              <h3 className="text-lg font-medium text-gray-900">{comment.name}</h3>
              <p className="text-sm text-gray-500">{comment.email}</p>
              <p className="mt-2 text-gray-600">{comment.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Comments;