import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Box, List, ListItem, ListItemText, Paper } from '@mui/material';

interface Message {
  sender: string;
  text: string;
  timestamp: string;
}

const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [username, setUsername] = useState('');

  const handleSend = async () => {
    if (!currentMessage.trim() || !username.trim()) return;
    
    const newMessage: Message = {
      sender: username,
      text: currentMessage,
      timestamp: new Date().toISOString()
    };
    
    setMessages([...messages, newMessage]);
    setCurrentMessage('');
    
    try {
      const response = await axios.post('http://localhost:8000/api/chat', {
        message: currentMessage,
        context: messages.slice(-5).map(m => `${m.sender}: ${m.text}`)
      });
      
      setMessages(prev => [...prev, {
        sender: 'TeachBot',
        text: response.data.response,
        timestamp: new Date().toISOString()
      }]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <Box sx={{ maxWidth: 800, margin: 'auto', p: 2 }}>
      <Paper elevation={3} sx={{ p: 2 }}>
        <TextField
          fullWidth
          label="Ditt namn"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{ mb: 2 }}
        />
        
        <Paper elevation={1} sx={{ height: 400, overflow: 'auto', mb: 2, p: 2 }}>
          <List>
            {messages.map((msg, i) => (
              <ListItem key={i}>
                <ListItemText
                  primary={`${msg.sender} (${new Date(msg.timestamp).toLocaleTimeString()})`}
                  secondary={msg.text}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
        
        <Box sx={{ display: 'flex', gap: 1 }}>
          <TextField
            fullWidth
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            label="Skriv ditt meddelande"
          />
          <Button 
            variant="contained" 
            onClick={handleSend}
            disabled={!currentMessage.trim() || !username.trim()}
          >
            Skicka
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default ChatComponent;