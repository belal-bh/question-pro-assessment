import { useState, useEffect } from 'react';
import { api } from '@/services/api';
import FilterSelect from '@/components/FilterSelect';

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface FilterOption {
  label: string;
  value: string;
}

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [titleOptions, setTitleOptions] = useState<FilterOption[]>([]);
  const [selectedTitle, setSelectedTitle] = useState<FilterOption | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts');
        const postsData = response.data;
        setPosts(postsData);
        setFilteredPosts(postsData);

        // Create title options
        const options = postsData.map((post: Post) => ({
          value: post.title.toLowerCase(),
          label: post.title.length > 50 
            ? `${post.title.substring(0, 50)}...` 
            : post.title
        }));
        setTitleOptions(options);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleFilterChange = (option: FilterOption | null) => {
    setSelectedTitle(option);
    if (option) {
      const filtered = posts.filter(post => 
        post.title.toLowerCase().includes(option.value.toLowerCase())
      );
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(posts);
    }
  };

  if (isLoading) {
    return <div className="flex justify-center items-center h-64">Loading posts...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">Posts</h2>
        <div className="w-96"> {/* Increased width for better title visibility */}
          <FilterSelect
            options={titleOptions}
            value={selectedTitle}
            onChange={handleFilterChange}
            placeholder="Filter by title"
          />
        </div>
      </div>

      <div className="grid gap-4">
        {filteredPosts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{post.title}</h3>
            <p className="text-gray-600">{post.body}</p>
          </div>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No posts found matching the selected title.
        </div>
      )}
    </div>
  );
};

export default Posts;